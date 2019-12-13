import * as React from "react";

export interface HeaderProps {
    SectionTitle: string;
    Complete: boolean;
    Expanded: boolean;
    SectionId: string;
    ToggleSection(name: string);
}

export default class HeaderSection extends React.Component<HeaderProps, null>
{
    toggleSection()
    {
        debugger;
        this.props.ToggleSection(this.props.SectionId);
    }
    render()
    {
        var collapseClass = "collapser flip";
        if(!this.props.Expanded)
        {
            collapseClass = "collapser";
        }
        return <div className="row form-group flex sectional medium vert" onClick={this.toggleSection.bind(this)}>

        <div className="form-group col-xs-1 short">
            <a href="#" className={collapseClass}>
                <i className="fa fa-chevron-circle-up"></i>
            </a>
        </div>
        <div className="form-group col-xs-8 short">
            <h4 className="sectiontitle">{this.props.SectionTitle}</h4>
        </div>
        <div className="form-group col-xs-3 align-right short">
            <span className="text-muted small sectionstatus undone">
                <i className="fa fa-check-square-o done"></i>
                <i className="fa fa-square-o undone"></i> &nbsp;Complete</span>
        </div>

    </div>;
    }
}
