import React, { useState } from 'react';
import { Table, Input, Select, Modal } from 'antd';
import "../styles/alunos.scss";

const { Option } = Select;

function Alunos() {
    const dataSource = [
        {
            key: '1',
            nome: 'João Silva',
            curso: 'Pré-Vestibular',
            genero: 'Masculino',
            etnia: 'Branco',
            periodo: 'Manhã',
            email: 'joao.silva@example.com',
            telefone: '(11) 99999-9999',
            endereco: 'Rua Exemplo, 123 - São Paulo, SP',
            foto: 'https://via.placeholder.com/150',
        },
        {
            key: '2',
            nome: 'Maria Oliveira',
            curso: 'Pré-Técnico',
            genero: 'Feminino',
            etnia: 'Pardo',
            periodo: 'Tarde',
            email: 'maria.oliveira@example.com',
            telefone: '(11) 88888-8888',
            endereco: 'Avenida Teste, 456 - Rio de Janeiro, RJ',
            foto: 'https://via.placeholder.com/150',
        },
    ];

    const columns = [
        { title: 'Nome', dataIndex: 'nome', key: 'nome' },
        { title: 'Curso', dataIndex: 'curso', key: 'curso' },
        { title: 'Gênero', dataIndex: 'genero', key: 'genero' },
        { title: 'Etnia', dataIndex: 'etnia', key: 'etnia' },
        { title: 'Período', dataIndex: 'periodo', key: 'periodo' },
    ];

    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCurso, setFiltroCurso] = useState('');
    const [filtroGenero, setFiltroGenero] = useState('');
    const [filtroEtnia, setFiltroEtnia] = useState('');
    const [filtroPeriodo, setFiltroPeriodo] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [alunoSelecionado, setAlunoSelecionado] = useState(null);

    const [exibirDesempenho, setExibirDesempenho] = useState(false);

    const filtrarDados = () => {
        return dataSource.filter((aluno) => {
            return (
                aluno.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
                aluno.curso.toLowerCase().includes(filtroCurso.toLowerCase()) &&
                aluno.genero.toLowerCase().includes(filtroGenero.toLowerCase()) &&
                aluno.etnia.toLowerCase().includes(filtroEtnia.toLowerCase()) &&
                aluno.periodo.toLowerCase().includes(filtroPeriodo.toLowerCase())
            );
        });
    };

    const abrirModal = (aluno) => {
        setAlunoSelecionado(aluno);
        setIsModalVisible(true);
    };

    const fecharModal = () => {
        setIsModalVisible(false);
        setAlunoSelecionado(null);
    };

    return (
        <div className="alunos-container">
            <div className="filtros-container">
                <div className="filtro-item">
                    <label>Nome</label>
                    <Input
                        placeholder="Filtrar por Nome"
                        value={filtroNome}
                        onChange={(e) => setFiltroNome(e.target.value)}
                    />
                </div>

                <div className="filtro-item">
                    <label>Curso</label>
                    <Select
                        placeholder="Filtrar por Curso"
                        value={filtroCurso}
                        onChange={(value) => setFiltroCurso(value)}
                    >
                        <Option value="">Todos</Option>
                        <Option value="Pré-Vestibular">Pré-Vestibular</Option>
                        <Option value="Pré-Técnico">Pré-Técnico</Option>
                        <Option value="Concurso">Concurso</Option>
                    </Select>
                </div>

                <div className="filtro-item">
                    <label>Gênero</label>
                    <Select
                        placeholder="Filtrar por Gênero"
                        value={filtroGenero}
                        onChange={(value) => setFiltroGenero(value)}
                    >
                        <Option value="">Todos</Option>
                        <Option value="Masculino">Masculino</Option>
                        <Option value="Feminino">Feminino</Option>
                        <Option value="Feminino">Não Binário</Option>
                    </Select>
                </div>

                <div className="filtro-item">
                    <label>Etnia</label>
                    <Select
                        placeholder="Filtrar por Etnia"
                        value={filtroEtnia}
                        onChange={(value) => setFiltroEtnia(value)}
                    >
                        <Option value="">Todos</Option>
                        <Option value="Branco">Branco</Option>
                        <Option value="Negro">Negro</Option>
                        <Option value="Pardo">Pardo</Option>
                        <Option value="Indígena">Indígena</Option>
                    </Select>
                </div>

                <div className="filtro-item">
                    <label>Período</label>
                    <Select
                        placeholder="Filtrar por Período"
                        value={filtroPeriodo}
                        onChange={(value) => setFiltroPeriodo(value)}
                    >
                        <Option value="">Todos</Option>
                        <Option value="Manhã">Manhã</Option>
                        <Option value="Tarde">Tarde</Option>
                        <Option value="Noite">Noite</Option>
                    </Select>
                </div>
            </div>

            <span className='frase-help'>Clique em um aluno para obter mais informações.</span>
            <span className='frase-help'>Os dados abaixo não representam alunos reais por enquanto.</span>

            <Table
                columns={columns}
                dataSource={filtrarDados()}
                pagination={false}
                scroll={{ x: 'max-content' }}
                style={{ width: '100%', marginTop: '20px', cursor: 'pointer'    }}
                rowClassName={() => 'custom-row-height'}
                onRow={(record) => ({
                    onClick: () => abrirModal(record),
                })}
            />

            <Modal
                title="Carteirinha do Aluno"
                visible={isModalVisible}
                onCancel={fecharModal}
                footer={null}
                width={600}
            >
                {alunoSelecionado && (
                    <div className="carteirinha-container">
                        <div className="foto-container">
                            <img
                                src={alunoSelecionado.foto || 'https://via.placeholder.com/150'}
                                alt="Foto do Aluno"
                                className="foto-aluno"
                            />
                        </div>
                        <div className="informacoes-container">
                            <h3>{alunoSelecionado.nome}</h3>
                            <p><strong>Curso:</strong> {alunoSelecionado.curso}</p>
                            <p><strong>Gênero:</strong> {alunoSelecionado.genero}</p>
                            <p><strong>Etnia:</strong> {alunoSelecionado.etnia}</p>
                            <p><strong>Período:</strong> {alunoSelecionado.periodo}</p>
                            <p><strong>Email:</strong> {alunoSelecionado.email}</p>
                            <p><strong>Telefone:</strong> {alunoSelecionado.telefone}</p>
                            <p><strong>Endereço:</strong> {alunoSelecionado.endereco}</p>

                            <button
                                className="btn-desempenho"
                                onClick={() => setExibirDesempenho(!exibirDesempenho)}
                            >
                                {exibirDesempenho ? 'Ocultar Desempenho' : 'Ver Desempenho'}
                            </button>
                        </div>

                        {exibirDesempenho && (
                            <div className="desempenho-container">
                                <h4>Desempenho do Aluno</h4>
                                <p><strong>Score por Disciplina:</strong></p>
                                <ul>
                                    <li>Matemática: 76/100</li>
                                    <li>Física: 74/100</li>
                                    <li>Química: 92/100</li>
                                </ul>
                                <p><strong>Principais Erros:</strong></p>
                                <ul>
                                    <li>Matemática: Cálculo de derivadas</li>
                                    <li>Física: Leis de Newton</li>
                                    <li>Química: Balanceamento de equações</li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Alunos;