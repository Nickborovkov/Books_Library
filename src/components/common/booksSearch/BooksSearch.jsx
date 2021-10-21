import React from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import {Select} from 'antd'
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import {Formik} from "formik";
import * as yup from 'yup'


const BooksSearch = ({search, setSearch, order, setOrder, category, setCategory}) => {

    const setNewOrder = (value) => {
        setOrder(value)
    }
    const setNewCategory = (value) => {
        setCategory(value)
    }

    const {Option} = Select

    const regexp = /^[a-zA-Z0-9_., - + - !]*$/

    const validationSchema = yup.object().shape({
        search: yup
            .string()
            .required(`Field can't be empty`)
            .max(150, `Max length is 150 symbols`)
            .matches(regexp, `Only english letters and digits`)
    })

    return (
        <Formik
            initialValues={{
                search: search
            }}
            validateOnBlur
            onSubmit={(values => {
                setSearch(values.search)
            })}
            validationSchema={validationSchema}
        >
            {({
                  values, touched, errors, handleChange, handleBlur,
                  handleSubmit, isValid, dirty
              }) => (
                <Form>
                    <Card
                        style={{width: `80%`, margin: `20px auto`}}
                        bordered={false}
                    >
                        <Form.Item
                            validateStatus={touched.search && errors.search && `error`}
                            help={errors.search}
                        >
                            <Row justify='center'>
                                <Col xs={20}>
                                    <Input
                                        placeholder="Enter book name here"
                                        name='search'
                                        value={values.search}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        onClick={ (e) => {e.target.value = ``} }
                                        onKeyDown={(e) => {
                                            if (e.code === `Enter` || e.key === `Enter`) {
                                                handleSubmit()
                                            }
                                        }}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <Button
                                        block
                                        type='primary'
                                        onClick={handleSubmit}
                                        disabled={!isValid && !dirty}
                                    >
                                        <SearchOutlined/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Row type='flex' justify='center'>
                            <Select
                                value={category}
                                style={{width: 200, margin: `0 10px`}}
                                onChange={setNewCategory}
                            >
                                <Option value=" ">All</Option>
                                <Option value="Art">Art</Option>
                                <Option value="Biography">Biography</Option>
                                <Option value="Computers">Computers</Option>
                                <Option value="History">History</Option>
                                <Option value="Medical">Medical</Option>
                                <Option value="Poetry">Poetry</Option>
                            </Select>

                            <Select
                                value={order}
                                style={{width: 200, margin: `0 10px`}}
                                onChange={setNewOrder}
                            >
                                <Option value="relevance">relevance</Option>
                                <Option value="newest">newest</Option>
                            </Select>
                        </Row>

                    </Card>
                </Form>
            )}
        </Formik>
    )
}

export default BooksSearch
