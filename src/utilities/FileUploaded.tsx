import * as React from "react";

export interface IFileUploadedProps
{
    ControlId: string;
    id: number;
    Title: string;
    Path: string;
    readOnly: boolean;
    removeFile(id: number, ControlId: string);
}

export default class FileUploaded extends React.PureComponent<IFileUploadedProps, null>
{
    deleteFileClicked()
    {
        const parts = this.props.Title.split("--");
        let filename = "";
        if (parts.length === 1)
        {
            filename = parts[0];
        }
        else
        {
            filename = parts[1];
        }
        const res = confirm(`Are you sure you want to delete ${filename}?`);
        if (res)
        {
            this.props.removeFile(this.props.id, this.props.ControlId);
        }
    }
    render()
    {
        const parts = this.props.Title.split("--");
        let filename = "";
        if (parts.length === 1)
        {
            filename = parts[0];
        }
        else
        {
            filename = parts[1];
        }

        return (
            <div id={this.props.ControlId}>
                <a className="cursor-pointer" title="Open File" target="_blank" href={this.props.Path} >{filename}</a>
                {(!this.props.readOnly) ? <a className="x-icon pull-right cursor-pointer" title="Delete File" onClick={this.deleteFileClicked.bind(this)}><i className="ms-Icon ms-Icon--Delete" /></a> : null}
            </div>
        );
    }
}
