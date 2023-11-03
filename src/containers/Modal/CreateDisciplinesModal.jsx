import {Input, Modal, Space} from 'antd';
// import NewsService from "../../core/services/NewsService";
import TextArea from "antd/es/input/TextArea";
import React, {useState} from "react";
import {addDisciplines, delDisciplines} from "../../core/store/features/subjects/DisciplinesSlice";
import {CoffeeOutlined} from "@ant-design/icons";
import Disciplines from "../../components/disciplines/Disciplines";
import {store} from "../../core/store";
import NewsService from "../../core/services/NewsService";

const CreateDisciplinesModal = ({isModalOpen, setIsModalOpen}) => {
    const [discipline, setDiscipline] = useState('');
    // const [text, setText] = useState('');

    const handleOk = () => {
         {
            store.dispatch(addDisciplines(discipline))
                .then(
                    () => {
                        setIsModalOpen(false)
                    }
                )
                // .then(() => {
                //     setIsModalOpen(false);
                // })
        };

            // store.dispatch(addDisciplines())
            //     .then(() => {
            //                 setIsModalOpen(false);
            //             })


        // NewsService.createNews({
        //     title,
        //     text
        // })
        //     .then(() => {
        //         setIsModalOpen(false);
        //     })

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Добавление дисциплины" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Input placeholder="Введите дисциплину" value={discipline} onChange={(e) => setDiscipline(e.target.value)}/>
                    {/*<TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}/>*/}
                </Space>
            </Modal>
        </>
    );
};
export default CreateDisciplinesModal;