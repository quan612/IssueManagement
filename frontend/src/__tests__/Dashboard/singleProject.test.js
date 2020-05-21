import React from "react";
import UpdatableProject, {
  ProjectMenu,
} from "PageComponents/Projects/Item/UpdatableProject";

import { shallow } from "enzyme";

const mockItem = {
  id: 1,
  name: "Project Name",
  description: "Project Description",
};

describe("Single Project Test <UpdatableProject />", () => {
  const wrapper = shallow(<UpdatableProject data={mockItem} />);

  it.skip("Single Project item can be rendered", () => {
    const Name = wrapper.find("Name");
    const Description = wrapper.find("Description");
    expect(Name.text()).toBe("Project Name");
    expect(Description.text()).toBe("Project Description");
  });

  it.skip("The item should show an icon on hover", () => {
    const onHover = wrapper.simulate("mouseenter");
    const EllipsisV = onHover.find("EllipsisV");
    expect(EllipsisV.exists());
  });

  it.skip("The item should show a sub menu on clicking EllipsisV", () => {
    const wrapperOnHover = wrapper.simulate("mouseenter");
    const EllipsisV = wrapperOnHover.find("EllipsisV");
    EllipsisV.children().simulate("click");
    const ProjectMenu = wrapperOnHover.find("ProjectMenu");
    expect(ProjectMenu.exists()).toBe(true);
  });
});

describe("Menu Test <ProjectMenu />", () => {
  const wrapper = shallow(<ProjectMenu />);

  it("The menu should have edit and delete buttons", () => {
    expect(wrapper.children()).toHaveLength(2);
  });
});
