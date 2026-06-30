function Biography(props) {
  return (
    <div className="biography-section">
      <h3>About Me</h3>
      <p>{props.bioText}</p>
    </div>
  );
}

export default Biography;