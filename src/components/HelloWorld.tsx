import * as React from "react";

export interface IHelloProps { Name?: string; }

export default class HelloWorld extends React.Component<IHelloProps, null>
{
    render()
    {
        let name = "World";
        if (this.props.Name)
        {
            name = this.props.Name;
        }
        return <h1>Hello {name}!</h1>;
    }
}
