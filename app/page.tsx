"use client"; // Esto indica que el componente es un Client Component

import { useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const animals = [
    {
      name: 'León',
      image: '/images/lion.jpg',
      description: 'El león es un gran felino de la sabana africana, conocido como el rey de la selva. Se caracteriza por su melena majestuosa y su rugido poderoso, que puede escucharse a varios kilómetros de distancia. Viven en manadas y son considerados los depredadores más grandes de su hábitat.'
    },
    {
      name: 'Tigre',
      image: '/images/tiger.jpg',
      description: 'El tigre es el felino más grande del mundo, con un pelaje rayado característico. Es un cazador solitario y su hábitat se extiende desde la India hasta el sudeste asiático y Siberia. Su belleza y poder lo convierten en uno de los animales más admirados.'
    },
    {
      name: 'Elefante',
      image: '/images/elephant.jpg',
      description: 'El elefante es el mamífero terrestre más grande, conocido por su inteligencia y su gran tamaño. Viven en manadas matriarcales y son conocidos por su memoria excepcional. Su trompa es una herramienta versátil que utilizan para alimentarse y comunicarse.'
    },
  ];

  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);

  const nextAnimal = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
  };

  const animal = animals[currentAnimalIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card 
        className="py-4" 
        style={{ 
          width: '90%', 
          maxWidth: '600px', 
          margin: '20px auto',
          border: '4px solid brown',
          borderRadius: '12px',
          padding: '10px',
          backgroundColor: 'brown',
        }}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{animal.name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={animal.name}
            className="object-cover rounded-lg"
            src={animal.image}
            width={600}
            height={300}
          />
          <p style={{ fontSize: '16px', marginTop: '10px' }}>{animal.description}</p>
        </CardBody>
      </Card>

      {/* Contenedor para el botón con borde negro */}
      <div style={{ border: '2px solid black', borderRadius: '20px', padding: '10px', margin: '20px 0' }}>
        {/* Botón para mostrar el siguiente animal */}
        <Button 
          onClick={nextAnimal} 
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Siguiente Animal
        </Button>
      </div>
    </div>
  );
}
