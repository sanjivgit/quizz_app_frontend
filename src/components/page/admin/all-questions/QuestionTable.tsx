"use client";

import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "@/lib/axiosConfig";
import { useMutation, useQueryClient } from "react-query";
import { QUIZZ_URL } from "@/utils/api/urls";
import { RiDeleteBinLine } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { InputTextarea } from "primereact/inputtextarea";

type HeroQuestionTableProps = {
  data: any[];
  testPaperId: number;
};

export default function HeroQuestionTable(props: HeroQuestionTableProps) {
  const queryClient = useQueryClient();
  const { data, testPaperId } = props;

  /** Handle Question Update */
  const handleQuestionUpdate = async (data: any) => {
    const newData = { ...data };
    delete newData.options;
    delete newData.test_paper;
    newData.test_paper_id = data.test_paper.id;
    await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.updateQuestion}`,
      method: "POST",
      data: newData,
    });
  };

  /** Handle Option Update */
  const handleOptionUpdate = async (data: any) => {
    await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.updateOption}`,
      method: "POST",
      data: data,
    });
  };

  /** Handle Delete */
  const handleDelete = async (data: any) => {
    await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.delete}`,
      method: "DELETE",
      data: {
        id: data.id,
      },
    });
  };

  const useMutateCall = (handleFunction: (data: any) => any) => {
    return useMutation(handleFunction, {
      onSuccess: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated Successfully",
          life: 3000,
        });
        queryClient.invalidateQueries(["questions", testPaperId]);
      },
      onError: () => {
        toast.current.show({
          severity: "error",
          summary: "Something Went Wrong!!",
          life: 3000,
        });
      },
    });
  };

  /** Update Question Mutate */
  const { mutate: updateMutate } = useMutateCall(handleQuestionUpdate);

  const onRowQuestionEditComplete = (e: any) => {
    updateMutate(e.newData);
  };

  /** Delete Mutate */
  const { mutate: deleteMutate } = useMutateCall(handleDelete);

  /** Update Mutate */
  const { mutate: updateOptionMutate } = useMutateCall(handleOptionUpdate);
  const onRowOptionEditComplete = (e: any) => {
    updateOptionMutate(e.newData);
  };

  /** Table Content */
  const toast = useRef<any>(null);
  const [expandedRows, setExpandedRows] = useState<any>(null);
  // eslint-disable-line react-hooks/exhaustive-deps

  const onRowExpand = (event: any) => {
    toast.current.show({
      severity: "info",
      summary: "Question Expanded",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event: any) => {
    toast.current.show({
      severity: "success",
      summary: "Question Collapsed",
      detail: event.data.name,
      life: 3000,
    });
  };

  const allowExpansion = (rowData: any) => {
    return rowData.options.length > 0;
  };

  /** Expanded Table Template */
  const rowExpansionTemplate = (data: any) => {
    return (
      <div className="p-3">
        <h5>Options for: {data.english_ques}</h5>
        <DataTable
          value={data.options}
          editMode="row"
          onRowEditComplete={onRowOptionEditComplete}
        >
          <Column field="key" header="Key"></Column>
          <Column
            editor={(options) => textEditor(options)}
            field="hindi_option"
            header="Hindi Option"
          ></Column>
          <Column
            editor={(options) => textEditor(options)}
            field="english_option"
            header="English Option"
          ></Column>
          <Column
            editor={(options) => textEditor(options)}
            field="img_path"
            header="Image Path"
          ></Column>
          <Column
            header="Edit"
            rowEditor={true}
            headerStyle={{ minWidth: "4rem", maxWidth: "5rem" }}
          ></Column>
        </DataTable>
      </div>
    );
  };

  /** Handle Delete */
  const viewDeleteTemplate = (rowData: any) => {
    return (
      <RiDeleteBinLine
        onClick={() => deleteMutate(rowData)}
        className={`cursor-pointer`}
      />
    );
  };

  /** Text Editor  Component */
  const textEditor = (options: any) => {
    return (
      <InputText
        value={options.value}
        className="p-2 border"
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  /** Number Editor  Component */
  const numberEditor = (options: any) => {
    return (
      <InputText
        value={options.value}
        className="p-2 border"
        type="number"
        onChange={(e) => options.editorCallback(Number(e.target.value))}
      />
    );
  };

  /** TextArea Editor  Component */
  const textAreaEditor = (options: any) => {
    return (
      <InputTextarea
        value={options.value}
        className="p-2 border"
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  return (
    <>
      <div className="card p-fluid bg-white shadow-lg border rounded mt-4">
        <Toast ref={toast} />
        <DataTable
          value={data}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          editMode="row"
          onRowEditComplete={onRowQuestionEditComplete}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          scrollable
          scrollHeight="800px"
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column
            editor={(options) => textEditor(options)}
            expander={allowExpansion}
            style={{ width: "5rem" }}
          />
          <Column
            editor={(options) => textAreaEditor(options)}
            field="hindi_ques"
            header="Hindi Question"
            headerStyle={{ textWrap: "nowrap" }}
            style={{ minWidth: "20rem" }}
          />
          <Column
            editor={(options) => textAreaEditor(options)}
            field="english_ques"
            header="English Question"
            headerStyle={{ textWrap: "nowrap" }}
            style={{ minWidth: "20rem" }}
          />
          <Column
            editor={(options) => numberEditor(options)}
            field="type_id"
            header="Type"
            headerStyle={{ textWrap: "nowrap" }}
          />
          <Column
            editor={(options) => textEditor(options)}
            field="ques_img_path"
            header="Image Path"
            headerStyle={{ textWrap: "nowrap" }}
          />
          <Column
            editor={(options) => numberEditor(options)}
            field="marks"
            header="marks"
            headerStyle={{ textWrap: "nowrap" }}
          />
          <Column
            editor={(options) => numberEditor(options)}
            field="negative_marks"
            header="Negative Marks"
            headerStyle={{ textWrap: "nowrap" }}
          />
          <Column
            editor={(options) => numberEditor(options)}
            field="correct_answer"
            header="Correct Answer"
            headerStyle={{ textWrap: "nowrap" }}
          />

          <Column header="Edit" rowEditor={true}></Column>
          <Column
            header="Delete"
            body={viewDeleteTemplate}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
