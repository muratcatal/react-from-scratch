import { shallow } from "enzyme";
import * as React from "react";

import { Roles } from "../../roles";
import { Sex } from "../../sex";
import App from "../app";

it("app component test", () => {
		const wrapper = shallow(<App name="murat" surname="çatal" role={Roles.RW} sex={Sex.Male} />);
		expect(wrapper.instance().props.name).toEqual("murat");
});
