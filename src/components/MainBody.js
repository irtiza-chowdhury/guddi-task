/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Menubar from '../assets/images/menu.svg';
import Minus from '../assets/images/minus.svg';
import PersonVector from '../assets/images/person-vector.svg';
import Plus from '../assets/images/plus.svg';
import Close from '../assets/images/Vector.svg';
import useFoods from '../hooks/useFoods';
import useRooms from '../hooks/useRooms';
import useTransports from '../hooks/useTransports';
import CarouselImage from './Carousel';

export default function MainBody() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(10077);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toKhagra = 1000;
  const { foods } = useFoods();
  const { rooms } = useRooms();
  const { transports } = useTransports();

  function handleAddValue(e) {
    if (e.target.checked) {
      setTotal(total + parseInt(e.target.value));
    }
  }
  return (
    <>
      <div className="mt-[50px]">
        <div className="main-card">
          <div className="title medium-paragraph">Group package</div>
          <div className="mt-[10px] flex">
            <span className="pt-[4px]">
              <img src={PersonVector} alt="person" />
            </span>
            <span className="pl-[5px] small-paragraph">Suitable for 10 </span>
          </div>
          <div className="mt-[10px] grid grid-cols-2 gap-[20px]">
            <div className="sample relative">
              <div className="offer small-paragraph absolute top-[15px] left-[0px] bg-meron z-10 px-[3px] py-[6px]">
                <span className="text-background "> -24% off 24 Jan - 18 Feb</span>
              </div>
              <CarouselImage />
            </div>
            <div className="options h-100">
              <div className="options-card flex justify-between">
                <div>
                  <div className="options-card-options mt-[10px] small-paragraph">
                    Food : Included
                  </div>
                  <div className="options-card-options mt-[10px] small-paragraph">
                    Room Type : Shared
                  </div>
                  <div className="options-card-options mt-[10px] small-paragraph">
                    Transport : Chander gari
                  </div>
                </div>
                <div
                  className="options-card-menu w-[5%] mt-[10px] cursor-pointer"
                  onClick={handleShow}
                >
                  <img src={Menubar} alt="menu" />
                </div>
              </div>
              <div className="options-card flex justify-between mt-[10px]">
                <div>
                  <div className="options-card-options mt-[10px] text-justify small-paragraph">
                    Amenities: A lot of things included, ...
                    <span className="text-gray">+ 5 more</span>
                  </div>
                  <div className="options-card-options mt-[10px] small-paragraph">
                    Includes: A lot of things included, ...
                    <span className="text-gray">+ 5 more</span>
                  </div>
                  <div className="options-card-options mt-[10px] small-paragraph">
                    Excludes: Some things excluded, ... <span className="text-gray">+ 5 more</span>
                  </div>
                </div>
                <div className="options-card-menu mt-[10px] cursor-pointer w-[5%]">
                  <img src={Menubar} alt="menu" />
                </div>
              </div>
              <div className=" flex justify-center items-center flex-col mt-[13px]">
                <div className="small-paragraph">Price per Person :</div>
                <div className="medium-paragraph">
                  {total} BDT
                  <span className="small-paragraph text-gray line-through">107290 BDT</span>
                </div>
              </div>
              <div className="Package-buttton mt-[10px]">
                <div className=" flex flex-row justify-between border-[1px] border-card-outer rounded-[8px]">
                  <span className="w-[45px] h-[45px] rounded-[8px] cursor-pointer flex justify-center items-center border-[1px] border-card-outer">
                    <img src={Minus} alt="minus" />
                  </span>
                  <span className="flex flex-row justify-center items-center">
                    Add Pakage <span>(0 selected)</span>
                  </span>
                  <span className="bg-teal w-[45px] cursor-pointer h-[45px] rounded-[8px] flex justify-center items-center">
                    <img src={Plus} alt="plus" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="modal-card "
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className=" absolute top-[-20px] right-[20px] cursor-pointer" onClick={handleClose}>
          <img src={Close} alt="close" />
        </div>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-[20px]">
            <div>
              <div>
                <div className="large-paragraph ml-[25px]">Update Room</div>
                <div className="mt-[10px]">
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`}>
                        {rooms?.map((room, index) => (
                          <div
                            className="medium-paragraph flex flex-row align-baseline mt-[10px]"
                            key={index}
                          >
                            <Form.Check
                              name="group1"
                              type={type}
                              id={`default-${type}-${room.id}`}
                              value={room.value}
                              onChange={handleAddValue}
                            />
                            <span className="ml-[10px] ">{room.title}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="large-paragraph ml-[25px]">Update Food</div>
                <div className="mt-[10px]">
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`}>
                        {foods?.map((food, index) => (
                          <div
                            key={index}
                            className="medium-paragraph flex flex-row align-baseline mt-[10px]"
                          >
                            <Form.Check
                              name="group1"
                              type={type}
                              id={`default-${type}-${food.id}`}
                              value={food.value}
                              onChange={handleAddValue}
                            />

                            <span className="ml-[10px]">{food.title}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
            </div>
            <div>
              <div className="large-paragraph ml-[25px]">Update Transport</div>
              <div className="mt-[10px]">
                <Form>
                  {['radio'].map((type) => (
                    <div key={`default-${type}`}>
                      {transports?.map((transport) => (
                        <div
                          className="medium-paragraph flex flex-row align-baseline mt-[10px]"
                          key={transport.id}
                        >
                          <Form.Check
                            name="group1"
                            type={type}
                            id={`default-${type}-${transport.id}`}
                            value={transport.value}
                            onChange={handleAddValue}
                          />

                          <span className="ml-[10px]">{transport.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </Form>
                <div className="medium-paragraph mt-[10px] flex flex-row items-baseline">
                  <input
                    className="ml-[2px]"
                    type="checkbox"
                    value={toKhagra}
                    onChange={handleAddValue}
                  />
                  <span className="ml-[10px]">Add transport to Khagrachori +1000 BDT</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
