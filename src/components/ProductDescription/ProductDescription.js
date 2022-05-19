import React from 'react';
import { Accordion } from 'react-bootstrap';
import fruitsImages from '../../Images/fruits3.jpg';
const ProductDescription = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-warning mb-4'>Our Products description</h1>
            <div className="row">
                <div className='col-sm-12 col-md-6'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is produce in our stock?</Accordion.Header>
                            <Accordion.Body>
                                More specifically, the term produce often implies that the products are fresh and generally in the same state as where and when they were harvested. In supermarkets, the term is also used to refer to the section of the store where fruit and vegetables are kept
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What are the qualities to look for when purchasing fruits?</Accordion.Header>
                            <Accordion.Body>
                                When buying fresh fruits and vegetables, choose those that have a good shape, texture and color and a fresh smell. It is best to shop for fresh produce often and buy only what you will use within a few days. This will cut down on the amount wasted because of spoilage.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How does fruit get to the stock?</Accordion.Header>
                            <Accordion.Body>
                                How does fruit get to the supermarket? Local farmers, distributors, as well as importers, help bring fruit to supermarkets. Most fruit is brought to the grocery store in trucks. Because it takes a long time for fruit to ripen, many fruits are picked when they are still unripe and then shipped out in large quantities.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How do stock keep bananas fresh?</Accordion.Header>
                            <Accordion.Body>
                                stock  most fruits in large refrigerated coolers in the back room. The fruit is pulled from the sales floor each night, and placed in the cooler to extend shelf life. Then it's restocked, and rotated the next morning. Some fruits and vegetables do not require refrigeration and are left on display overnight.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How do you keep berries fresh longer?</Accordion.Header>
                            <Accordion.Body>
                                It's simple really: just give them a quick bath in a vinegar and water solution the moment you get them home, dry them, and place them in a clean container lined with paper towels. The vinegar helps to kill any mold that could cause them to spoil, and this method can make them last as long as 10 days in our house!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How do you store fruit?</Accordion.Header>
                            <Accordion.Body>
                                Storing fruit in the fridge <br />
                                1. Most fresh fruit, including apples, berries and grapes, will last longer if kept in their original packaging and stored in the crisper of your fridge.
                                <br />
                                2. Berries can last in the fridge for about a week. ...
                                <br />
                                3. Plastic bags with tiny vents (openings) help keep fruit fresh longer by releasing moisture.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Our all fruits fleshy?</Accordion.Header>
                            <Accordion.Body>
                                Broadly there are two categories of fruits: fleshy fruits and dry fruits. Fleshy fruits include berries, aggregate fruits, and multiple fruits; dry fruits include legumes, cereal grains, capsulate fruits, and nuts.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='col-sm-12 col-md-6' >
                    <img data-aos="zoom-in"
                        data-aos-duration="1000" data-aos-delay="200" className='w-100' src={fruitsImages} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;