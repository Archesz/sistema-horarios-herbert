import React, { useState } from 'react';
import { Input, Select, Modal } from 'antd';
import './ListStudents.scss';

const { Option } = Select;

const studentsData = [
    { id: 1, name: 'Ana Silva', type: 'Pré-Vestibular', photo: 'https://via.placeholder.com/50', details: 'Estudante dedicada ao vestibular de medicina.' },
    { id: 2, name: 'João Souza', type: 'Pré-Técnico', photo: 'https://via.placeholder.com/50', details: 'Focado em cursos técnicos de TI.' },
    { id: 3, name: 'Mariana Lima', type: 'Concurso', photo: 'https://via.placeholder.com/50', details: 'Se preparando para concursos públicos.' },
    { id: 4, name: 'Pedro Santos', type: 'Pré-Vestibular', photo: 'https://via.placeholder.com/50', details: 'Focado em engenharia civil.' },
    { id: 5, name: 'Fernanda Oliveira', type: 'Pré-Técnico', photo: 'https://via.placeholder.com/50', details: 'Interesse em técnico em enfermagem.' },
];

function ListStudents() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Filtragem de estudantes
    const filteredStudents = studentsData.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterType === '' || student.type === filterType)
    );

    // Função para abrir o modal
    const showModal = (student) => {
        setSelectedStudent(student);
        setIsModalVisible(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedStudent(null);
    };

    return (
        <div className='listStudents-container'>
            <div className='filter-container'>
                <Input 
                    placeholder='Buscar por nome...' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select 
                    defaultValue="" 
                    onChange={(value) => setFilterType(value)}
                    style={{ width: 180 }}
                >
                    <Option value="">Todos</Option>
                    <Option value="Pré-Vestibular">Pré-Vestibular</Option>
                    <Option value="Pré-Técnico">Pré-Técnico</Option>
                    <Option value="Concurso">Concurso</Option>
                </Select>
            </div>
            <div className='students-list'>
                {filteredStudents.map(student => (
                    <div 
                        key={student.id} 
                        className='student-item'
                        onClick={() => showModal(student)}
                    >
                        <img src={student.photo} className='student-photo' />
                        <span>{student.name}</span>
                    </div>
                ))}
            </div>

            <Modal 
                title={selectedStudent?.name} 
                visible={isModalVisible} 
                onCancel={handleCloseModal} 
                footer={null}
            >
                <div className='modal-content'>
                    <img src={selectedStudent?.photo} alt={selectedStudent?.name} className='modal-photo' />
                    <p><strong>Tipo:</strong> {selectedStudent?.type}</p>
                    <p><strong>Detalhes:</strong> {selectedStudent?.details}</p>
                </div>
            </Modal>
        </div>
    );
}

export default ListStudents;
