import React from "react";

/**
 * | Author- Sanjiv Kumar
 * | Created On- 03-02-2024
 * | Created for- TextArea Field
 * | Status- done
 */

interface TextareaProps {
  label: string;
  name: string;
  readonly?: boolean;
  placeholder?: string | "";
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextareaProps> = (props) => {
  const { label, name } = props;
  const fieldId = "id_" + name;
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-secondary text-sm" htmlFor={fieldId}>
          {label}
        </label>
        <textarea
          onChange={props.onChange}
          disabled={props.readonly}
          className={`text-primary h-32 p-3 rounded-lg border bg-transparent border-zinc-400 ${props.className}`}
          name={props.name}
          id={fieldId}
        />
      </div>
    </>
  );
};

export default TextArea;
