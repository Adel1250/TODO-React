import { useNavigate, useParams } from "react-router-dom"
import { addNewTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function TodoComponent() {
    const { id } = useParams();
    const authContext = useAuth();
    const navigate = useNavigate();
    const username = authContext.username;
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    useEffect(
        // eslint-disable-next-line
        () => retrieveTodo(), [id]
    )

    function retrieveTodo() {
        if (id !== -1) {
            retrieveTodoApi(username, id)
                .then(response => {
                    setDescription(response.data.description);
                    setTargetDate(response.data.targetDate);
                })
                .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        const todo = {
            description: values.description,
            targetDate: values.targetDate
        }
        if (id !== "-1") {
            updateTodoApi(username, id, todo)
                .then(() => {
                    navigate("/todos");
                })
                .catch(error => console.log(error));
        } else {
            addNewTodoApi(username, todo)
                .then((response) => {
                    console.log(response)
                    navigate("/todos");
                })
                .catch(error => console.log(error));
        }
    }

    function validate(values) {
        let errors = {
        };
        if (values.description.length === 0) {
            errors.description = "Enter atleast 1 character"
        }
        if (values.targetDate === undefined) {
            errors.targetDate = "Enter a valid target date"
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>
                Enter Todo details
            </h1>
            <div>
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-3" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}