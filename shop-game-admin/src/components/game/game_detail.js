import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class DetailGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "",
                short_name: "",
                type: "",
                description: "",
                developer: "",
                publisher: "",
                release_date: "",
                platform: "",
                purchase_price: 0,
                sale_price: 0,
                tag: [],
                keys: [],
                images: [],
                videos: [],
                includes: [],
                included_in: [],
            }
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                product: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }

    showTags(tags) {
        var result = null;
        if (tags.length > 0) {
            result = tags.map((tag, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{tag}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showIncludedIns(includedIns) {
        var result = null;
        if (includedIns.length > 0) {
            result = includedIns.map((includedIn, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{includedIn.name}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showIncludes(includes) {
        var result = null;
        if (includes.length > 0) {
            result = includes.map((include, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{include.name}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showKeys(keys) {
        var result = null;
        if (keys.length > 0) {
            result = keys.map((key, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{key.code}</td>
                        <td style={{ padding: '0px' }}>{key.status === "true" ? "Active" : "Inactive"}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showVideos(videos) {
        var result = null;
        if (videos.length > 0) {
            result = videos.map((video, index) => {
                return (
                    <Col className="video">
                        <div className="video-container" style={{ display: 'flex', width: '25rem' }}>
                            <form style={{ marginLeft: '1rem' }}>
                                <iframe width="400" height="400" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <input name={index} type="text" placeholder="url" style={{ width: '25rem' }} />
                                <input name={index} type="text" placeholder="type" style={{ width: '25rem' }} />
                            </form>
                        </div>
                    </Col>
                )
            });
        }
        return result;
    }

    showImages(images) {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <Col className="image">
                        <div className="image-container" style={{ display: 'flex', width: '25rem' }}>
                            <form style={{ marginLeft: '1rem' }}>
                                <img src={image.url} style={{ width: '25rem', height: '25rem' }} />
                                <td>{image.type}</td>
                            </form>
                        </div>
                    </Col>
                )
            });
        }
        return result;
    }

    render() {
        var { product } = this.state
        return (
            <div>
                <Container>
                    <div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
                        <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Chi tiết sản phẩm</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
                                <h5>Thông tin chi tiết</h5>
                                <Container style={{ marginTop: '3rem' }}>
                                    <Col>
                                        <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className="product-details-table">
                                                <Table striped bordered style={{ width: '54rem' }}>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>1</td>
                                                            <td style={{ padding: '5px' }}>Tên sản phẩm</td>
                                                            <td style={{ padding: '0px' }}>{product.name}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>Tên rút gọn</td>
                                                            <td style={{ padding: '0px' }}>{product.short_name}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>3</td>
                                                            <td style={{ padding: '5px' }}>Loại</td>
                                                            <td style={{ padding: '0px' }}>{product.type}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>4</td>
                                                            <td style={{ padding: '5px' }}>Tiêu đề</td>
                                                            <td style={{ padding: '0px' }}>{product.title}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>5</td>
                                                            <td style={{ padding: '5px' }}>Mô tả</td>
                                                            <td style={{ padding: '0px' }}>{product.description}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>6</td>
                                                            <td style={{ padding: '5px' }}>Nhà phát triển</td>
                                                            <td style={{ padding: '0px' }}>{product.developer}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>7</td>
                                                            <td style={{ padding: '5px' }}>Nhà phát hành</td>
                                                            <td style={{ padding: '0px' }}>{product.publisher}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>8</td>
                                                            <td style={{ padding: '5px' }}>Ngày ra mắt</td>
                                                            <td style={{ padding: '0px' }}>{product.release_date}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>9</td>
                                                            <td style={{ padding: '5px' }}>Nền tảng</td>
                                                            <td style={{ padding: '0px' }}>{product.platform}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>10</td>
                                                            <td style={{ padding: '5px' }}>Giá mua</td>
                                                            <td style={{ padding: '0px' }}>{product.purchase_price}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>11</td>
                                                            <td style={{ padding: '5px' }}>Giá bán</td>
                                                            <td style={{ padding: '0px' }}>{product.sale_price}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>12</td>
                                                            <td style={{ padding: '5px' }}>Tags</td>
                                                            <td>
                                                                <Table bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Tags name</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showTags(product.tag)}
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>13</td>
                                                            <td style={{ padding: '5px' }}>Keys</td>
                                                            <td>
                                                                <Table bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Code</th>
                                                                            <th>Trạng thái</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showKeys(product.keys)}
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>14</td>
                                                            <td style={{ padding: '5px' }}>DLC</td>
                                                            <td>
                                                                <Table bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Tên</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showIncludes(product.includes)}
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>15</td>
                                                            <td style={{ padding: '5px' }}>Phiên bản cao cấp khác</td>
                                                            <td>
                                                                <Table bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Tên</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showIncludedIns(product.included_in)}
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Row>
                            {/*Parent Row 2 */}
                            <Row style={{ display: "flex", margin: '0.2rem', border: '1px solid black', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
                                <p style={{ fontSize: '12px' }}>Videos</p>
                                <Row>
                                    {this.showVideos(product.videos)}
                                </Row>
                            </Row>
                            {/*Parent Row 3 */}
                            <Row style={{ display: "flex", margin: '0.2rem', border: '1px solid black', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
                                <p style={{ fontSize: '12px' }}>Hình ảnh</p>
                                <Row>
                                    {this.showImages(product.images)}
                                </Row>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        )
    }
}
export default DetailGame;



