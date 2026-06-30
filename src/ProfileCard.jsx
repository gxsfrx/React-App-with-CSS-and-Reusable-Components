import React from 'react';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="card-body">
        {/* Student Information Section */}
        <div className="info-block">
          <h2 className="block-title">Student Information</h2>
          <div className="info-text">
            <p><span className="label">Name:</span> {props.name}</p>
            <p><span className="label">Course:</span> {props.course}</p>
            <p><span className="label">Year Level:</span> {props.yearLevel}</p>
          </div>
        </div>

        {/* About Me Section */}
        {props.about && (
          <div className="info-block">
            <h2 className="block-title">About Me</h2>
            <p className="info-text">{props.about}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;