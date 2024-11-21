import { Field, Form, Formik,  } from "formik";

const SearchBar = ({ onChangeQuery }) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = (values, {resetForm } ) => {
            onChangeQuery(values.query);
            resetForm();
    }
    return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}> 
        
        <Form>
            <Field name='query' placeholder='Search...' />
            <button type="submit">Search</button>
        </Form>

    </Formik>
    </>
    )
}

export default SearchBar;