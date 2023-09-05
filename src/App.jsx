import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const JoditEditorComponent = () => {
  const editor = useRef(null);

  useEffect(() => {
    setContent(localStorage.getItem("document"));
      }, [])
  

  const [content, setContent] = useState("");

  const guardarTexto = (newContent) => {
    localStorage.setItem("document", newContent);
  };

  return (
    <>
      <div className="editor_texto">
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            width: "100%",
            toolbarSticky: true,
            spellcheck: true, // Habilita la corrección ortográfica.
            language: "es",
            tabKey: "Tab",
          }}
          onChange={(newContent) => {
            // Maneja los cambios en el contenido del editor aquí
            // console.log(newContent);
            guardarTexto(newContent);
          }}
        />
      </div>
    </>
  );
};

export default JoditEditorComponent;
