import React from "react";
import "./CardComp.css";
import { MdDelete } from 'react-icons/md'

export default function CardComp({ todo, handleDeleteItem }) {

	return (
		<div className="container-card">
			<div className="card">
				<div className="title-card">
					<p>{todo.text}</p>
				</div>
				<div className="buttons-card">
					<div className="delete-button">
						<MdDelete onClick={() => handleDeleteItem(todo.id)} />
					</div>
				</div>
			</div>
		</div>
	);
}
