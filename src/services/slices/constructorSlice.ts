import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '@utils-types';

type ConstructorState = {
    bun: TConstructorIngredient | null,
    ingredients:TConstructorIngredient[]
}

const initialState: ConstructorState = {
    bun: null,
    ingredients: []
}

const constructorSlice = createSlice({
    name: 'burgerConstructor',
    initialState,
    reducers: {
        setBun(state, action: PayloadAction<TConstructorIngredient>) {
          state.bun = action.payload;
        },
        addIngredient(state, action: PayloadAction<TConstructorIngredient>) {
          state.ingredients.push(action.payload);
        },
        removeIngredient(state, action: PayloadAction<{ id: string }>) {
          state.ingredients = state.ingredients.filter(
            item => item.id !== action.payload.id
          );
        },
        moveIngredient(
          state,
          action: PayloadAction<{ fromIndex: number; toIndex: number }>
        ) {
          const { fromIndex, toIndex } = action.payload;
          const item = state.ingredients.splice(fromIndex, 1)[0];
          state.ingredients.splice(toIndex, 0, item);
        },
        clearConstructor(state) {
          state.bun = null;
          state.ingredients = [];
        },
      },
    });

export const {
    setBun,
    addIngredient,
    removeIngredient,
    moveIngredient,
    clearConstructor,
    } = constructorSlice.actions;

export default constructorSlice.reducer