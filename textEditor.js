marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();

function Message() {
  let string =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
  const [str, setStr] = React.useState(string);
  const [rows, setRows] = React.useState(11);
  const [show, setShow] = React.useState(true);
  const [showSmall, setShowSmall] = React.useState(true);
  const handleChange = (event) => {
    setStr(event.target.value);
  };
  const handleClick = () => {
    if (rows === 11) {
      setRows(35);
    } else {
      setRows(11);
    }

    setShow(!show);
  };
  const handleClickSmall = () => {
    setShowSmall(!showSmall);
  };

  return (
    <>
      {showSmall ? (
        <div className="editor">
          <div className="input-group-text">
            (<i className="fa-solid fa-fire-flame-curved"></i>) Editor{" "}
            <button className="btn">
              <i className="fa-solid fa-maximize" onClick={handleClick}></i>
            </button>
          </div>

          <textarea
            id="editor"
            rows={rows}
            value={str}
            onChange={handleChange}
          ></textarea>
        </div>
      ) : null}
      {show ? (
        <div className="previewer">
          <div className="input-group-text">
            (<i className="fa-solid fa-fire-flame-curved"></i>) Previewer{" "}
            <button className="btn two">
              <i
                className="fa-solid fa-maximize"
                onClick={handleClickSmall}
              ></i>
            </button>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(str, { renderer: renderer })
            }}
          ></div>
        </div>
      ) : null}
    </>
  );
}
ReactDOM.render(<Message />, document.getElementById("root"));
