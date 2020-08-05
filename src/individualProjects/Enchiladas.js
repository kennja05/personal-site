import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

const Enchiladas = () => {

    return(
        <div className='project-page container-fluid'>
            <div className='recipe container'>
                <Card>
                    <Card.Body>
                        <Card.Title>Enchiladas</Card.Title>
                        <Card.Subtitle>Courtesy of Bill Kenny</Card.Subtitle>
                        <br></br>
                        <Card.Title>Ingredients</Card.Title>
                        <ListGroup className='list-group-flush'>
                            <ListGroup.Item>
                                One Packet of Flour Tortilla Shells - I prefer to get 
                                the larger burrito size.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Between 1 to 1.5 Pounds of Ground Beef or Chicken Breast
                            </ListGroup.Item>
                            <ListGroup.Item>
                                1 Spanish Onion
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Peppers of Your Choosing - I like to use a poblano and a jalepeño
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Approximately 20oz Red Enchilada Sauce - 2 small cans or 1 large can
                            </ListGroup.Item>
                            <ListGroup.Item>
                                1 Bag Shredded Mexican Blend Cheese
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Sour Cream - for serving
                            </ListGroup.Item>
                            <ListGroup.Item>
                                1 T Vegetable Oil
                            </ListGroup.Item>
                        </ListGroup>
                    <Card.Title>Instructions</Card.Title>
                    <ListGroup className='list-group-flush'>
                        <ListGroup.Item>
                            Preheat oven to 375 °F and lightly grease a 9"x13" baking dish.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Remove seeds from peppers, and roughly chop with the onion.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Heat up the vegetable oil in a large pan on stovetop. Once oil is shimmering
                            add peppers/onions, and saute until softened, stirring frequently.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cook the meat in the same pan as the vegetables. If using chicken, shred
                            with a pair of forks once it is cooked through.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Once the meat is fully cooked (and shredded if necessary), add about half
                            of the enchilada sauce to the pan. Start to add cheese, and continue
                            adding cheese until mixture thickens. This may require about half of 
                            the bag. 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Place the tortilla shells on a plate, microwave until pliable - 15 
                            seconds. 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Assemble enchiladas by spooning the meat and vegetable mixture into the
                            center of a tortilla shell, rolling the shell up like a burrito, being 
                            sure to tuck in all of the edges. Nestle each rolled enchilada into the 
                            already greased backing dish.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Drizzle remaining enchilada sauce over top of the enchiladas. Sprinkle 
                            cheese over top of the enchiladas - amount is up to personal preference.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cook the enchiladas in the oven for 25 minutes.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Allow enchiladas to cool for 5 minutes, and serve with sour cream.
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Enchiladas