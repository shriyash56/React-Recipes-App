import React, { useState } from "react";
// import Ingredients from "./Ingredients";
import { useModal } from "react-modal-hook";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

export default function Recipe({ title, calories, image, ingredients }) {
  const [showModal, hideModal] = useModal(({ in: open, onExited }) => (
    <Dialog open={open} onExited={onExited} onClose={hideModal}>
      <DialogTitle class="font-bold text-3xl flex justify-center">
        Take a good look at the recipe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="text-gray-700 md:text-lg">
            <ul className="list-disc">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            Calories: {calories}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button className="btn" onClick={hideModal}>
          Close
        </button>
      </DialogActions>
    </Dialog>
  ));

  return (
    <>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <div className="cursor-pointer" onClick={showModal}>
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={image}
              title="click"
            />
          </div>
          <header className="flex items-center bg-white justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg font-mono font-semibold">{title}</h1>
          </header>

          <footer className="flex items-center bg-white justify-between leading-none p-2 md:p-4">
            <div className="no-underline text-grey-darker hover:fill-current text-red-600">
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
