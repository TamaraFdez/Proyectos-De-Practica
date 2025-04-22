import { describe, expect, test } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItems } from '../src/hooks/useItems'

describe('useItem hook', () =>{
    test('should add and remove items', () =>{
        const { result } = renderHook(()=> useItems())
        expect(result.current.items.length).toBe(0)

        act(() =>{
            result.current.addItem('Elemento de prueba')
            result.current.addItem('Elemento de prueba 2 ')
        })
       
        expect(result.current.items.length).toBe(2)

        act(()=>{
            result.current.removeItem(result.current.items[0].id)
        })
        expect(result.current.items.length).toBe(1)
    })
})