import React from "react";
import { Form, InputNumber, DatePicker, Select, Button } from "antd";
import "../App.css";

const { Option } = Select;

const BookingForm = ({ onClose, onConfirm }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const formattedData = {
      date: values.date.format("YYYY-MM-DD"),
      time: values.time,
      guests: values.guests,
      occasion: values.occasion,
    };
    onConfirm(formattedData); 
  };
  
  return (
    <div className="form-container">
      <div className="booking-form">
        <h2>Reserve a Table</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ guests: 1 }}
        >
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Please select a time!" }]}
          >
            <Select placeholder="Select a time">
              <Option value="6:00 PM">6:00 PM</Option>
              <Option value="7:00 PM">7:00 PM</Option>
              <Option value="8:00 PM">8:00 PM</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Guests"
            name="guests"
            rules={[
              { required: true, message: "Please enter the number of guests!" },
            ]}
          >
            <InputNumber min={1} max={10} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Occasion"
            name="occasion"
            rules={[{ required: true, message: "Please select an occasion!" }]}
          >
            <Select placeholder="Select an occasion">
              <Option value="Birthday">Birthday</Option>
              <Option value="Anniversary">Anniversary</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-btn">
              Confirm
            </Button>
            <Button type="default" onClick={onClose} className="cancel-btn">
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
