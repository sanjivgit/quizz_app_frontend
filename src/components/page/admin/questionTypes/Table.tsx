"use client";

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "@/lib/axiosConfig";
import { useMutation, useQueryClient } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { QUIZZ_URL } from "@/utils/api/urls";
import { RiDeleteBinLine } from "react-icons/ri";

type HeroTableComponentProps = {
  data: any[];
};

export default function HeroTableComponent(props: HeroTableComponentProps) {
  const queryClient = useQueryClient();
  const { data } = props;

  /** Handle Update */
  const handleUpdate = async (data: any) => {
    await axios({
      url: `${QUIZZ_URL.QUESTION_TYPE_URL.update}`,
      method: "POST",
      data: data,
    });
  };

  /** Handle Delete */
  const handleDelete = async (data: any) => {
    await axios({
      url: `${QUIZZ_URL.QUESTION_TYPE_URL.delete}`,
      method: "DELETE",
      data: {
        id: data.id
      },
    });
  };

  const useMutateCall = (handleFunction: (data: any) => any) => {
    return useMutation(handleFunction, {
      onSuccess: () => {
        queryClient.invalidateQueries(["types"]);
      },
      onError: () => {
        toast.error("Something Went Wrong!!");
      },
    });
  };

  /** Update Mutate */
  const { mutate: updateMutate } = useMutateCall(handleUpdate);

  // /** Delete Mutate */
  const {mutate: deleteMutate} = useMutateCall(handleDelete)

  const onRowEditComplete = (e: any) => {
    updateMutate(e.newData);
  };

  const textEditor = (options: any) => {
    return (
      <InputText
        type="text"
        value={options.value}
        className="p-2 border"
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  /** Handle Delete */
  const viewDeleteTemplate = (rowData: any) =>{
    return (
      <RiDeleteBinLine
        onClick={()=> deleteMutate(rowData)}
        className={`cursor-pointer`}
      />
    );
  }

  const allowEdit = () => {
    return true;
  };

  return (
    <>
      <Toaster />
      <div className="card p-fluid bg-white shadow-lg border rounded mt-4">
        <DataTable
          value={data}
          dataKey="id"
          editMode="row"
          onRowEditComplete={onRowEditComplete}
          tableStyle={{ minWidth: "50rem" }}
        > <Column
            field="name"
            header="Name"
            editor={(options) => textEditor(options)}
            style={{ width: "20%" }}
          ></Column>
          <Column
            header="Edit"
            rowEditor={allowEdit}
            headerStyle={{ minWidth: "2rem" }}
          ></Column>
          <Column
            header="Delete"
            body={viewDeleteTemplate}
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
