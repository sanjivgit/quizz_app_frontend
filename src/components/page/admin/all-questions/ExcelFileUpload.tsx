import React, { useState, useRef, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuCloudy } from "react-icons/lu";

type ExcelFileUploadUiPropType = {
  handleUpload: (file: any) => void;
  readonly: boolean;
};

const ExcelFileUploadUi: React.FC<ExcelFileUploadUiPropType> = (props) => {
  const { handleUpload, readonly } = props;
  const inputFileRef = useRef<any>();
  const [state, setState] = useState<any>({
    inProgress: false,
    error: "",
    file: "",
  });
  const { inProgress, error, file } = state;

  const handleUploadDoc = () => {
    if (!readonly) {
      inputFileRef.current.click();
    }
  };

  ///////////// Checking File Type
  const validateFileType = (file: any) => {
    const validType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const validExtension = '.xlsx';

    // Check MIME type
    if (file.type !== validType) {
        return false;
    }

    // Check file extension
    const fileName = file.name;
    if (fileName.slice(-validExtension.length).toLowerCase() !== validExtension) {
        return false;
    }
    return true;
  };

  ////// Handle Upload
  const interalHandleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!readonly) {
      setState((prev: any) => {
        return { ...prev, inProgress: true };
      });
      try {
        if (e.target.files?.length) {
          const file = e.target.files[0];
          if (file.size > 2 * 1024 * 1024 || file.size! < 9 * 1024) {
            throw Error(`file size should be between 10 kb to 2 mb`);
          }
          if (!validateFileType(file)) {
            throw Error(`'${file.type.split("/")[1]}' file not allowed`);
          }

          handleUpload(file);
        }
      } catch (error: any) {
        toast.error(error.message)
        setState((prev: any) => {
          return { ...prev, error: error.message };
        });
        console.log(error);
      } finally {
        setState((prev: any) => {
          return { ...prev, inProgress: false };
        });
        e.target.value = "";
      }
    }
  };

  return (
    <>
    <Toaster/>
      <div className="my-2 p-4 border-[3px] rounded-xl border-dashed flex justify-center items-center flex-col">
        {inProgress == false && (
          <>
            {file ? (
              <h1>{file.name}</h1>
            ) : (
              <>
                <div className="rounded-md mt-8">
                  <LuCloudy className="text-[1.5rem]" />
                </div>
                <h3 className="text-xl text-black font-openSans">
                  Choose a file{" "}
                </h3>
                <h1 className="text-gray-400 text-sm">
                  Excel format only, up to 2MB
                </h1>
              </>
            )}
          </>
        )}
        <span>{error}</span>

        <div className="mb-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            className="hidden"
            ref={inputFileRef}
            onChange={interalHandleUpload}
          />

          {error && <p className="text-red-500 text-sm m-2">{error}</p>}

          <div className="flex justify-center">
            <button
              type="button"
              className={`border-gray-300 border text-gray-150 text-sm px-14 py-1 mt-2 hover:bg-gray-200 hover:text-gray-500  rounded leading-5 shadow-lg ${
                readonly ? "bg-gray-200 cursor-not-allowed" : "bg-white"
              }`}
              onClick={handleUploadDoc}
            >
              Browse File
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcelFileUploadUi;
