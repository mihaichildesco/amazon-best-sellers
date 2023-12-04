export default function EventExample() {
  const handlebuttonClick = () => {
    alert("Clicked");
  };

  const handleFormInput = (e: any) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handlebuttonClick}>Click me</button>
    </section>
  );
}
