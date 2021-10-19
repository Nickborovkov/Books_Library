import React from "react";
import {Input} from "antd";
import { Select } from 'antd'


const BooksSearch = ({search, setSearch, order, setOrder, category, setCategory}) => {

    const setNewOrder = (value) => {
        setOrder(value)
    }
    const setNewCategory = (value) => {
        setCategory(value)
    }

    const { Search } = Input
    const { Option } = Select

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const enterPress = (e) => {
        if(e.code === `Enter` || e.key === `Enter`){
            setSearch(e.target.value)
        }
    }

    return (
        <div>
            <Search
                placeholder="Enter book name here"
                enterButton="Search"
                size="large"
                value={search}
                onChange={handleChange}
                onSearch={onSearch}
                onKeyDown={enterPress}
            />

            <Select
                value={category}
                style={{ width: 200 }}
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
                style={{ width: 200 }}
                onChange={setNewOrder}
            >
                <Option value="relevance">relevance</Option>
                <Option value="newest">newest</Option>
            </Select>

        </div>
    )
}

export default BooksSearch
