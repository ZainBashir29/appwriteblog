import React from "react";
import { Controller } from "react-hook-form";
import { useId } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function RTE({ name, control, label, defaultValue = "" }) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        id={id}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="yt0l8zfikncarojw5u867bnduhnfc87uhskeay4xl2ixrmv8"
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
