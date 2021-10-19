import React from "react";
import {Form, Formik} from "formik";
import * as yup from 'yup'

const BooksSearch = ({search, setSearch, order, setOrder, category, setCategory}) => {

    const validationSchema = yup.object().shape({
        search: yup
            .string()
            .required(`Field can't be empty`)
    })
    const setNewOrder = (e) => {
        setOrder(e.target.value)
    }

    const setNewCategory = (e) => {
        if(e.target.value === `All`){
            setCategory(` `)
        }else {
            setCategory(e.target.value)
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                search: search,
                }}
                validateOnBlur
                onSubmit={(values)=>{
                    setSearch(values.search)
                }}
                validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur,
                      handleSubmit, isValid, dirty})=>(
                          <Form>
                              {errors.search && touched.search &&
                              <p>{errors.search}</p>}
                              <input
                                  type="text"
                                  name='search'
                                  value={values.search}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                              />
                              <button
                                  disabled={!isValid && !dirty}
                                  type={'submit'}
                                  onSubmit={handleSubmit}>Search</button>
                          </Form>
                )}
            </Formik>

            <div>
                <label >Category:
                    <select value={category} onChange={setNewCategory}>
                        <option value="All">All</option>
                        <option value="Art">Art</option>
                        <option value="Biography">Biography</option>
                        <option value="Computers">Computers</option>
                        <option value="History">History</option>
                        <option value="Medical">Medical</option>
                        <option value="Poetry">Poetry</option>
                    </select>
                </label>
                <label >Sort by:
                    <select value={order} onChange={setNewOrder}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </label>
            </div>

        </div>
    )
}

export default BooksSearch
