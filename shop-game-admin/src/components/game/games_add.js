import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import Key from './games_add_key';
import Tag from './games_add_tag';
import Include from './games_add_include';
import IncludeIn from './games_add_includein';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddGame extends Component {

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
				vocher: ""
			}
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		if (name === "purchase_price" || name === "sale_price") {
			value = parseInt(value)
			if (value < 0) {
				value = 0
			}
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				[name]: value
			}
		}))
	}

	onChangeImange = (e) => {
		var target = e.target;
		var name = target.placeholder;
		var index = target.name
		var value = target.value;
		var { product } = this.state
		var images = product.images
		images[index] = {
			...images[index],
			[name]: value
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				images
			}
		}))
	}

	onChangeVideo = (e) => {
		var target = e.target;
		var name = target.placeholder;
		var index = target.name
		var value = target.value;
		var { product } = this.state
		var videos = product.videos
		videos[index] = {
			...videos[index],
			[name]: value
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				videos
			}
		}))
	}

	onAddVideo = (videos) => {
		var video = {
			url: "",
			type: ""
		}
		videos.push(video)
		this.setState({
			videos
		})
	}

	onAddImage = (images) => {
		var image = {
			url: "",
			type: ""
		}
		images.push(image)
		this.setState({
			images
		})
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
								<input name={index} type="text" placeholder="url" style={{ width: '25rem' }} onChange={this.onChangeVideo} />
								<input name={index} type="text" placeholder="type" style={{ width: '25rem' }} onChange={this.onChangeVideo} />
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
								<input name={index} type="text" placeholder="url" style={{ width: '25rem' }} onChange={this.onChangeImange} />
								<input name={index} type="text" placeholder="type" style={{ width: '25rem' }} onChange={this.onChangeImange} />
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
		console.log(product)
		return (
			<div>
				<Container>
					<div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
						<p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Thêm sản phẩm</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
							{/*Parent Row 1*/}
							<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
								<h5>Thông tin chung</h5>
								<Container style={{ marginTop: '3rem' }}>
									<Col>
										<div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div className="product-details-table">
												<Table striped bordered style={{ width: '30rem' }}>
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
															<td style={{ padding: '5px' }}>Name</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="name" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>2</td>
															<td style={{ padding: '5px' }}>Short name</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="short_name" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>3</td>
															<td style={{ padding: '5px' }}>Type</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="type" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>4</td>
															<td style={{ padding: '5px' }}>Title</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="title" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>5</td>
															<td style={{ padding: '5px' }}>Description</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="description" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>6</td>
															<td style={{ padding: '5px' }}>Developer</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="developer" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>7</td>
															<td style={{ padding: '5px' }}>Publisher</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="publisher" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>8</td>
															<td style={{ padding: '5px' }}>Release date</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="release_date" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>9</td>
															<td style={{ padding: '5px' }}>Platform</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="platform" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>10</td>
															<td style={{ padding: '5px' }}>Purchase price</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="purchase_price" size="sm" type="number" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>11</td>
															<td style={{ padding: '5px' }}>Sale price</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} onChange={this.onChange} name="sale_price" size="sm" type="number" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>12</td>
															<td style={{ padding: '5px' }}>Tags</td>
															<td><Tag tags={product.tag} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>13</td>
															<td style={{ padding: '5px' }}>Keys</td>
															<td><Key keys={product.keys} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>14</td>
															<td style={{ padding: '5px' }}>Includes</td>
															<td><Include includes={product.includes}/></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>15</td>
															<td style={{ padding: '5px' }}>Includes in</td>
															<td><IncludeIn /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>15</td>
															<td style={{ padding: '5px' }}>Voucher</td>
															<Form.Select aria-label="Default select example">
																<option>Open this select menu</option>
																<option value="1">One</option>
																<option value="2">Two</option>
																<option value="3">Three</option>
															</Form.Select>
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
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={() => this.onAddVideo(product.videos)}>+</Button>
								<Row>
									{this.showVideos(product.videos)}
								</Row>
							</Row>
							{/*Parent Row 3 */}
							<Row style={{ display: "flex", margin: '0.2rem', border: '1px solid black', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
								<p style={{ fontSize: '12px' }}>Hình ảnh</p>
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={() => this.onAddImage(product.images)}>+</Button>
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
export default AddGame;



