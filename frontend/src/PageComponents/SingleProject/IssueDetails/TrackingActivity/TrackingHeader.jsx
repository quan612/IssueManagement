import React from "react";
import UserAvatar from "shared/components/Avatar";

import { DatesContainer } from "shared/components/styles";
import { toLocalDateTime } from "shared/utils/dateUtils";

const TrackingUser = ({ user }) => {
  if (!user) user = { name: "Unassigned", id: null, avatar: null };
  return <UserAvatar className="mr-1" size={40} user={user} src={user.avatar} />;
};

export const TrackingHeader = ({ user, date, isCreated = false }) => {
  return (
    <div className="relative">
      <span className="inline-block absolute h-8">
        <TrackingUser user={user} />
      </span>

      <span className="inline-block w-full pl-16 pr-3">
        <span className="font-bold text-lg">{user?.name}</span>
        <br></br>
        <span>
          <DatesContainer>
            {isCreated && "Created "}
            {toLocalDateTime(date)}
          </DatesContainer>
        </span>
      </span>
    </div>
  );
};
