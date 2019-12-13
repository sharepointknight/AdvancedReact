import * as React from "react";
import SharePointService from "../services/SharePointService";
import HeaderSection from "./HeaderSection";

export interface IFormAppState {
    Data: any;
    Sections: any;
    Dirty: boolean;
 }

export default class FormApp extends React.Component<null, IFormAppState>
{
    constructor()
    {
        super();
        this.state = { Data: { Title: ""}, Dirty: false, Sections: { General: {Expanded: true, Complete: false}, Purpose: {Expanded: false, Complete: false}, Proposed: {Expanded: false, Complete: false}}};
    }
    async saveForm()
    {
        if (!this.state.Dirty)
        {
            return;
        }
        var res = await SharePointService.AddListItem("AdvancedReact", this.state.Data);
        this.setState({Dirty: false});
    }
    toggleSection(sectionId)
    {
        var sections = this.state.Sections;
        sections[sectionId].Expanded = !sections[sectionId].Expanded;
        this.setState({Sections: sections});
    }
    updateFieldValue(event)
    {
        const id = event.target.id;
        const value = event.target.value;
        const data = this.state.Data;
        data[id] = value;
        this.setState({Data: data, Dirty: true});
    }
    render()
    {
        return <div className="container">
        <div className="row">

            { /* <!-- Left Sticky Nav --> */ }
            <nav className="col-sm-3" id="myScrollspy">
                <div className="affix align-right">
                    <ul className="nav nav-stacked" data-offset-top="-1" style={ {marginTop: "50px" }}>
                        <li data-anchor="#general" className="active">
                            <a>
                                <i className="fa fa-check"></i> 1. General Information</a>
                        </li>
                        <li data-anchor="#purpose">
                            <a>
                                <i className="fa fa-check"></i> 2. Purpose &amp; Need</a>
                        </li>
                        <li data-anchor="#proposed">
                            <a>
                                <i className="fa fa-check"></i> 3. Proposed Action</a>
                        </li>

                    </ul>
                    <hr />
                    <div style={ {paddingRight: "20px" } }>
                        <label className="text-muted">Form Controls:</label>
                        <br />
                        <button type="button" className="btn btn-success side" disabled={!this.state.Dirty} onClick={this.saveForm.bind(this)}>
                            <i className="fa fa-save"></i> Save</button>
                        <button type="button" className="btn btn-default side" disabled>
                            <i className="fa fa-flag"></i> Finalize &amp; Submit</button>
                    </div>
                </div>

            </nav>
            <div className="col-xs-9">

                <h3>Process Forms</h3>
                <div className="form-box po view">
                    <HeaderSection SectionId="General" SectionTitle="1. General Information" Expanded={ this.state.Sections.General.Expanded} Complete={false} ToggleSection={this.toggleSection.bind(this)} />
                    { this.state.Sections.General.Expanded && <div className="row form-group sectionform" id="general">
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-6">
                                    <label className="required">Project Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter a name for this project" value={this.state.Data.Title} id="Title" onChange={this.updateFieldValue.bind(this)} />
                                </div>

                                <div className="col-xs-3">
                                    <label className="required">Project Number:</label>
                                    <input type="text" className="form-control" placeholder="Enter Project #" aria-describedby="basic-addon1" />
                                </div>

                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-4">
                                    <label className="required">Region:</label>
                                    <select className="form-control" id="sel1">
                                        <option disabled selected>Select Region</option>
                                        <option>Region 2</option>
                                        <option>Region 3</option>
                                        <option>Region 4</option>
                                    </select>
                                </div>

                                <div className="col-xs-4">
                                    <label className="required">Country:</label>
                                    <select className="form-control" id="sel2" disabled>
                                        <option disabled selected>Select Country</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                        <option>United States</option>
                                    </select>
                                </div>

                                <div className="col-xs-4">
                                    <label className="required">Location:</label>
                                    <select className="form-control" id="sel3" disabled>
                                        <option disabled selected>Select Location</option>
                                        <option>Chapel Hill</option>
                                        <option>Capitol Reef</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>
                        <div className="col-xs-11 form-group">
                            <div className="row">
                                <div className="col-xs-12">
                                    <label className="required">Project Preparer:</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Enter Name" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <hr className="regular" />
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-12">
                                    <label className="required">Estimated Completion Date:</label>
                                </div>

                                <div className="col-xs-4">
                                    <select className="form-control" id="sel4">
                                        <option disabled selected>Select Duration</option>
                                        <option>2 Weeks</option>
                                        <option>4 Weeks</option>
                                        <option>8 Weeks</option>
                                    </select>
                                </div>

                                <div className="col-xs-8">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-calendar"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Select Date" data-provide="datepicker" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">
                            <div className="row">
                                <div className="col-xs-12 group0">
                                    <label className="required">Document Type:</label>
                                    <select className="form-control" id="click1">
                                        <option disabled selected>Select Type</option>
                                        <option>State</option>
                                        <option>Demo Document</option>
                                        <option>Automated Process</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    }
                    <HeaderSection SectionId="Purpose" SectionTitle="2. Purpose &amp; Need" Expanded={this.state.Sections.Purpose.Expanded} Complete={false} ToggleSection={this.toggleSection.bind(this)} />
                    { this.state.Sections.Purpose.Expanded && <div className="row form-group sectionform" id="purpose">
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-12">
                                    <label className="required">Purpose:</label>
                                    <label className="note block">Provide a one sentence description of the Purpose, defining the transportation problem
                                        to be solved.</label>
                                    <textarea className="form-control" placeholder="Enter Text"></textarea>
                                </div>

                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-12">
                                    <label className="required">Need:</label>
                                    <label className="note block">Provide a one sentence description of the Need, stating evidence to support the problem
                                        statement (Purpose). </label>
                                    <textarea className="form-control" placeholder="Enter Text"></textarea>
                                </div>

                            </div>

                        </div>
                    </div>
                    }
                    <HeaderSection SectionId="Proposed" SectionTitle="3. Proposed Action" Expanded={this.state.Sections.Proposed.Expanded} Complete={false} ToggleSection={this.toggleSection.bind(this)} />
                    { this.state.Sections.Proposed.Expanded && <div className="row form-group sectionform" id="proposed">
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-12">
                                    <label className="required">Description of Proposed Action:</label>
                                    <label className="note block">Provide a written description, including project length, route number, and mile post.</label>
                                    <textarea className="form-control" placeholder="Enter Text"></textarea>
                                </div>

                            </div>

                        </div>
                        <div className="col-xs-1 form-group">
                            <div className="progress-circle"></div>
                        </div>

                        <div className="col-xs-11 form-group">

                            <div className="row">

                                <div className="col-xs-12">

                                    <label className="required">Project Location:</label>
                                    <label className="note block">Include a map of the project location and typical section(s) of the proposed project</label>
                                    <input id="input1" type="file" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>;
    }
}
