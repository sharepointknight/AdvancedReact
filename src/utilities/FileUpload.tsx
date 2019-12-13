import * as React from "react";

export interface IFileUploadProps
{
    id: string;
    inputClass: string;
    readOnly?: boolean;
    fileChanged(file: ArrayBuffer, fieldName: string, fileName: string);
}

export default class FileUpload extends React.PureComponent<IFileUploadProps, null>
{
    private uploadedFileName: string = "";
    fileChanged(event)
    {
        const file = event.target.files[0];
        this.uploadedFileName = file.name;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = this.fileCallback.bind(this);
    }
    fileCallback(uf: ProgressEvent)
    {
        const reader: FileReader = uf.target as FileReader;
        const fileArray = reader.result;

        this.props.fileChanged(fileArray, this.props.id, this.uploadedFileName);
    }
    render()
    {
        const readOnly = this.props.readOnly === true;

        let control = <input id={this.props.id} type="file" className={this.props.inputClass} onChange={this.fileChanged.bind(this)} />;

        if (readOnly)
        {
            control = null;
        }
        return control;
    }
}
