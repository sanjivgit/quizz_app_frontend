"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { usePathname, useRouter } from "next/navigation";
import axios from "@/lib/axiosConfig";
import { useMutation, useQueryClient } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { QUIZZ_URL } from "@/utils/api/urls";
import { RiDeleteBinLine } from "react-icons/ri";
import { InputNumber } from "primereact/inputnumber";
import { IoEyeSharp } from "react-icons/io5";

type HeroTestPapersTableProps = {
  data: any[];
  testId: number;
};

export default function HeroTestPapersTable(props: HeroTestPapersTableProps) {
  const queryClient = useQueryClient();
  const { data, testId } = props;
  const router = useRouter();
  const pathname = usePathname();
  const [statuses] = useState(["true", "false"]);

  /** Handle Update */
  const handleUpdate = async (data: any) => {
    const updatedData = { ...data };
    delete updatedData.total_question;
    updatedData.test_id = testId;
    updatedData.active =
      data.active === "true" ? true : data.active === "false" && false;
    updatedData.is_free =
      data.is_free === "true" ? true : data.is_free === "false" && false;

    await axios({
      url: `${QUIZZ_URL.TEST_PAPER_URL.update}`,
      method: "POST",
      data: updatedData,
    });
  };

  /** Handle Delete */
  const handleDelete = async (data: any) => {
    await axios({
      url: `${QUIZZ_URL.TEST_PAPER_URL.delete}`,
      method: "DELETE",
      data: {
        id: data.id,
      },
    });
  };

  const useMutateCall = (handleFunction: (data: any) => any) => {
    return useMutation(handleFunction, {
      onSuccess: () => {
        queryClient.invalidateQueries(["test-papers", testId]);
      },
      onError: () => {
        toast.error("Something Went Wrong!!");
      },
    });
  };

  /** Update Mutate */
  const { mutate: updateMutate } = useMutateCall(handleUpdate);

  /** Delete Mutate */
  const { mutate: deleteMutate } = useMutateCall(handleDelete);

  const getSeverity = (value: string) => {
    switch (value) {
      case "true":
        return "success";

      case "false":
        return "warning";

      default:
        return null;
    }
  };

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

  const statusEditor = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  /** For IsFree */
  const statusIsFreeEditor = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <Tag
        value={String(rowData.active)}
        severity={getSeverity(rowData.active)}
      ></Tag>
    );
  };

  const statusBodyForFreeTemplate = (rowData: any) => {
    return (
      <Tag
        value={String(rowData.is_free)}
        severity={getSeverity(rowData.is_free)}
      ></Tag>
    );
  };

  /** Handle View Click */
  const viewBodyTemplate = (rowData: any) => {
    const handleClick = () => {
      router.push(`${pathname.split("sub-test-papers/")[0]}/sub-test-papers/questions/${rowData.id}`);
    };
    return <IoEyeSharp onClick={handleClick} className="cursor-pointer h-8" />;
  };

  /** Handle Delete */
  const viewDeleteTemplate = (rowData: any) => {
    return (
      <RiDeleteBinLine
        onClick={() => {
          if (rowData?.total_question && rowData?.total_question < 1) {
            deleteMutate(rowData);
          }
        }}
        className={`${
          rowData?.total_question > 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      />
    );
  };

  const allowEdit = (rowData: any) => {
    return rowData.name !== "Blue Band";
  };

  /** Price */
  const priceEditor = (options: any) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="INR"
        locale="en-US"
        onKeyDown={(e) => e.stopPropagation()}
      />
    );
  };

  const priceBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(rowData.price);
  };

  return (
    <>
      <Toaster />
      <div className="card p-fluid bg-white shadow-lg border rounded mt-4">
        <DataTable
          value={data}
          editMode="row"
          dataKey="id"
          onRowEditComplete={onRowEditComplete}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="name"
            header="Name"
            editor={(options) => textEditor(options)}
            style={{ textWrap: "nowrap" }}
          ></Column>
          <Column
            field="sub_title"
            header="Sub Title"
            editor={(options) => textEditor(options)}
            style={{ textWrap: "nowrap" }}
          ></Column>
          <Column
            field="cover_img_url"
            header="Cover Image"
            editor={(options) => textEditor(options)}
            headerStyle={{textWrap: "nowrap"}}
          ></Column>
          <Column
            field="duration"
            header="Duration"
            editor={(options) => textEditor(options)}
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="total_marks"
            header="Marks"
            editor={(options) => textEditor(options)}
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="total_question"
            header="Questions"
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="active"
            header="Active"
            body={statusBodyTemplate}
            editor={(options) => statusEditor(options)}
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="is_free"
            header="Free"
            body={statusBodyForFreeTemplate}
            editor={(options) => statusIsFreeEditor(options)}
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="price"
            header="Price"
            body={priceBodyTemplate}
            editor={(options) => priceEditor(options)}
            style={{ width: "20%" }}
          ></Column>
          <Column
            header="View"
            body={viewBodyTemplate}
            style={{ width: "10%" }}
          ></Column>
          <Column
            header="Edit"
            rowEditor={allowEdit}
            headerStyle={{ minWidth: "4rem" }}
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
