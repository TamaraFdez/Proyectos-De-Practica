import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App test', ()=>{
    // test('should work', ()=>{
    //     render(<App />)
    //     screen.debug()

    //     expect(
    //         screen.getAllByText('Mi prueba tecnica')
    //     ).toBeDefined()
    // })
    test('Should add items and remove them', async ()=>{
        //crear usuario
        const user = userEvent.setup()

        render(<App />)

        // buscar input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        //buscar form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button= form.querySelector('button')
        expect(button).toBeDefined()

        // await user.type(input, 'Elemento de prueba')
        // await user.click(button!)

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)
        // asegurar que el elemento se añade
        const list = screen.getByRole('list')
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(1)

        //asegurar de que podemos borrar
        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

         const noResults = screen.getByText('No hay elementos en la lista')
         expect(noResults).toBeDefined()
        

    })
})