import React from "react";
import { useRouteMatch } from "react-router-dom";
import { withIssueCreate, withToastCreate } from "shared/HOC";
import { flowRight } from "lodash";

import { Formik } from "formik";
import * as Yup from "yup";

import UserAvatar from "shared/components/Avatar";
import { Button } from "shared/components/Button";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";
import { FormikSelect, FormikInput, FormikCKEditor } from "shared/components/FormikPrimitiveComponent";

import { IssueType, IssueStatus, IssuePriority } from "shared/constants/issues";

import { Heading, SelectItemWrapper, SelectItemLabel, ButtonWrapper, CheckMark } from "./styles";

const CreateIssue = ({ closeModal, users, createIssueAPI, creatingIssue, createToast }) => {
  const match = useRouteMatch();
  const userOptions = [{ id: null, name: "Unassigned" }, ...users];

  return (
    <Formik
      initialValues={{
        type: IssueType.TASK,
        title: "",
        description: "",
        assignee: userOptions[0],
        status: IssueStatus.BACKLOG, // default for newly created issue
        priority: IssuePriority.LOWEST,
        project: match.params.projectId,
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(" Title is required!"),
      })}
      onSubmit={async (values, { setErrors }) => {
        let res = await createIssueAPI({
          variables: {
            title: values.title,
            description: values.description,
            type: values.type,
            status: values.status,
            priority: values.priority,
            project: values.project,
            assignee: values.assignee.id,
          },
        }).catch((error) => setErrors(error));

        if (res)
          createToast({
            variables: {
              type: "success",
              message: `Create issue success!`,
            },
          });

        closeModal();
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Heading>Create Issue</Heading>
          <FormikSelect
            label="Issue Type"
            selected={formik.values.type}
            items={Object.values(IssueType)}
            renderIcon={renderType}
            onChange={(item) => formik.setFieldValue("type", item)}
          />

          <FormikInput
            label="Title"
            placeholder="Summarise the issue"
            type="text"
            name="title"
            onChange={formik.handleChange}
            focus={true}
          />

          <FormikCKEditor
            label="Description"
            name="description"
            data={formik.values.description}
            onChange={(e, editor) => formik.setFieldValue("description", editor.getData())}
          />

          <FormikSelect
            label="Assignee"
            selected={formik.values.assignee.name}
            items={userOptions}
            renderIcon={renderAssignee}
            onChange={(user) => {
              formik.setFieldValue("assignee", user);
            }}
          />

          <FormikSelect
            label="Priority"
            selected={formik.values.priority}
            items={Object.values(IssuePriority)}
            renderIcon={renderPriority}
            onChange={(item) => formik.setFieldValue("priority", item)}
          />

          <ButtonWrapper>
            <Button type="submit" variant="primary" onClick={() => {}} isWorking={creatingIssue}>
              Submit
            </Button>
            <Button variant="secondary" onClick={closeModal} className="ml-2">
              Cancel
            </Button>
          </ButtonWrapper>
        </form>
      )}
    </Formik>
  );
};

export default flowRight(withIssueCreate, withToastCreate)(CreateIssue);

const renderPriority = (priority) => <IssuePriorityIcon priority={priority} />;
const renderType = (type) => <IssueTypeIcon type={type} />;
const renderAssignee = (user) => <UserAvatar user={user} size={25} src={user.avatar} className="mr-2" />;
