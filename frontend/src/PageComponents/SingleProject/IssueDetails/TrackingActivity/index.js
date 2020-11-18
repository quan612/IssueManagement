import React from "react";
import { withIssueLogsQuery } from "shared/HOC/Issue";

import { PanelContainer, LogWrapper, LogItemWrapper, LogItemInner } from "./styles";

import { TrackingHeader } from "./TrackingHeader";
import { TrackingContent } from "./TrackingContent";

const filterLogOpen = "Open";

const TrackingActivity = ({ issue, logsOnIssue = [], loading }) => {
  const logs = logsOnIssue.filter((log) => log.type !== filterLogOpen);
  return (
    <div className="comment-area mb-2 relative">
      <div className="comment-heading table w-full mt-4 mb-5">
        <h3>Activity: ({logsOnIssue.length})</h3>
      </div>
      <PanelContainer>
        <LogWrapper>
          {logs.map((log) => {
            const { user, created } = log;
            return (
              <LogItemWrapper name="LogItemWrapper" key={log.id}>
                <div className="relative inner">
                  <TrackingHeader user={user} date={created} />
                  <TrackingContent log={log} issue={issue} />
                </div>
              </LogItemWrapper>
            );
          })}
        </LogWrapper>
      </PanelContainer>
    </div>
  );
};

export default withIssueLogsQuery(TrackingActivity);
