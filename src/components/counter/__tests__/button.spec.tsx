import React from "react";
import Button, { ButtonType } from "../button";
import renderer from "react-test-renderer";

describe("Button component testing", ()=>{
    test("button snapshot testing",()=>{
        const component: any = renderer.create(<Button type={ButtonType.Increment} onClick={()=>{}} />);
        let tree: any = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});