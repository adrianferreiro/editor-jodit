import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const JoditEditorComponent = () => {
  const editor = useRef(null);

  const [content, setContent] = useState("");

  const guardarTexto = (newContent) => {
    localStorage.setItem("document", newContent);
  };

  const recuperarTexto = () => {
    setContent(localStorage.getItem("document"));
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
      <button onClick={()=> recuperarTexto()} >Prueba</button>
    </>
  );
};

export default JoditEditorComponent;
