import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const newsletterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4
        style={{ textAlign: "center", marginBottom: "2rem" }}
        className="title"
      >
        our newsletter
      </h4>
      <div className="form-row" >
        {/* First Name */}
        <label htmlFor="name" className="form-label"  >
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          placeholder="john"
          style={{marginBottom: "1rem"}}
        />
        {/* Last Name */}
        <label htmlFor="lastName" className="form-label" >
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          placeholder="doe"
          style={{marginBottom: "1rem"}}
        />
        {/* Email */}
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
          placeholder="test@test.com"
          style={{marginBottom: "1rem"}}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "1rem" }}
        >
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </div>
    </Form>
  );
};

export default Newsletter;
