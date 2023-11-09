import { useState } from "react";
import toast from "react-hot-toast";

const AssignmentSubmit = () => {

    const [studentType, setStudentType] = useState("");
  const [bookBrand, setBookBrand] = useState("");
  //   const studentTypeRef = useRef()

  console.log(studentType);
  // handel create element --------
  const handleCreateElement = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const url = form.url.value;
    const name = form.name.value;
    const brand = bookBrand;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const type = studentType;

    const createBooks = {
      url,
      name,
      brand,
      price,
      description,
      rating,
      type,
    };

    console.log(createBooks);

    if (url?.length < 1) {
      toast.error("Please add student URL");
      toast.error("");

      return;
    }

    if (name?.length < 1) {
      toast.error("Please add student name");
      return;
    }
    if (brand?.length < 1) {
      toast.error("Please add student Brand name");
      return;
    }
    if (price?.length < 1) {
      toast.error("Please add student Price");
      return;
    }
    if (description?.length < 1) {
      toast.error("Please add student shot description");
      return;
    }
    if (rating?.length < 1) {
      toast.error("Please add student Rating");
      return;
    }
    if (type?.length < 1) {
      toast.error("Please add student type");
      return;
    }
    // return
    fetch("https://assignment-10-server-site-lemon.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          form.reset();
          toast.success("books Uploaded Success");
        }

        // form.reset();
      })
      .catch((err) => {
        toast.success(`${err}`);
        console.log(err);
      });
  };
    return (
        <div>
      <div className="max-w-6xl m-auto p-5 bg-gray-200   rounded-lg text-black space-y-4 dark:bg-neutral-900 dark:text-white">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-black dark:text-white">
            Assignment Submit
          </h1>
        </div>
        <form onSubmit={handleCreateElement}>
          <div className="flex flex-col     gap-3">
            {/*----------------- row ----------------- */}
            <div className="md:flex gap-6 ">
              {/*  name */}
              <div className="mb-4 flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                student Image URL
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none w-full block dark:bg-neutral-900 dark:text-white dark:border"
                  type="url"
                  name="url"
                  placeholder="Enter books Image URL http://img.png"
                />
              </div>

              {/* student name */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Books Name
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full dark:bg-neutral-900 dark:text-white dark:border"
                  type="text"
                  name="name"
                  placeholder="Enter Books Name"
                />
              </div>
            </div>

            {/* ----------------- row 2 -------------------- */}
            <div className="md:flex gap-6 ">
              {/* ratting */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Books Rating
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full dark:bg-neutral-900 dark:text-white dark:border"
                  type="number"
                  name="rating"
                  placeholder="Books Rating"
                />
              </div>
              {/* price */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Books Price
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md dark:bg-neutral-900 dark:text-white dark:border outline-none block w-full "
                  type="number"
                  name="price"
                  placeholder="Enter Price $1000"
                />
              </div>
            </div>

            {/* ----------------- row 3 -------------------- */}
            <div className="md:flex gap-6 ">
              {/*  short description  */}
              <div className="mb-4 flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Short description
                </label>
                <input
                  className="bg-white dark:bg-neutral-900 dark:text-white dark:border border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                  type="text"
                  placeholder="Enter Short description (do not use lorem ipsum)"
                  name="description"
                />
              </div>
            </div>

            {/* ----------------- row 4 -------------------- */}
            <div className=" md:flex gap-6 ">
              {/*  brand */}

              <div className="mb-4 flex-1 ">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Brand Name
                </label>
                <div className="  flex justify-between p-0 items-center gap-3 bg-white dark:bg-neutral-900 dark:text-white dark:border border-gray-300 border-2 rounded-md   ">
                  <p className="flex-1  px-3">
                    {bookBrand ? bookBrand : " Choose a Brand"}
                  </p>

                  <div className="dropdown ">
                    <label
                      tabIndex={0}
                      className="btn btn-sm bg-gray-200 hover:bg-gray-200  dark:bg-neutral-900 dark:text-white dark:border text-black rounded-none text-xl  outline-none border-none  "
                    >
                      {/* <AiOutlineCaretDown></AiOutlineCaretDown> */}
                    </label>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box right-0 top-10 w-52 dark:bg-neutral-900 dark:text-white dark:border"
                    >
                      <li onClick={() => setBookBrand("Apple")}>
                        <a>Alpha Book Publisher</a>
                      </li>
                      <li onClick={() => setBookBrand("Samsung")}>
                        <a>Parama Publishers & Distributors</a>
                      </li>
                      <li onClick={() => setBookBrand("Sony")}>
                        <a>Nymphea Publication</a>
                      </li>
                      <li onClick={() => setBookBrand("Google")}>
                        <a>Al Fatah Publications</a>
                      </li>
                      <li onClick={() => setBookBrand("Intel")}>
                        <a>SEAN Publication</a>
                      </li>
                      <li onClick={() => setBookBrand("Vivo")}>
                        <a>Kathaprokash</a>
                      </li>
                      <li onClick={() => setBookBrand("Oppo")}>
                        <a>Adorn Publication</a>
                      </li>
                      <li onClick={() => setBookBrand("Nokia")}>
                        <a>The University Press Limited (UPL)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* student type */}
              <div className="mb-4 relative  flex-1">
                <p className="ml-1 mb-1 block text-xl font-semibold">
                  Books Type
                </p>

                <div className="  flex justify-between p-0 items-center gap-3 bg-white  border-gray-300 border-2 rounded-md   dark:bg-neutral-900 dark:text-white dark:border ">
                  <p className="flex-1  px-3">
                    {studentType ? studentType : " Choose Books Type"}
                  </p>

                  <div className="dropdown  ">
                    <label
                      tabIndex={0}
                      className="btn btn-sm bg-gray-200 hover:bg-gray-200  dark:bg-neutral-900 dark:text-white dark:border text-black rounded-none text-xl  outline-none border-none  "
                    >
                      {/* <AiOutlineCaretDown></AiOutlineCaretDown> */}
                    </label>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box right-0 top-10 w-52 dark:bg-neutral-900 dark:text-white dark:border"
                    >
                      <li onClick={() => setStudentType("Phone")}>
                        <a>Bangla</a>
                      </li>
                      <li onClick={() => setStudentType("Computer")}>
                        <a>Math</a>
                      </li>
                      <li onClick={() => setStudentType("Laptop")}>
                        <a>Physics</a>
                      </li>
                      <li onClick={() => setStudentType("Camera")}>
                        <a>Chemistry</a>
                      </li>
                      <li onClick={() => setStudentType("Hadphone")}>
                        <a>Accounting</a>
                      </li>
                      <li onClick={() => setStudentType("Watch")}>
                        <a>Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn
              btn-secondary"
              type="submit"
            >
              Submit Book
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AssignmentSubmit;