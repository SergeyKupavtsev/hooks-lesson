import React, { useEffect, useMemo, useState } from 'react';
import "./styles.css"
function lazyCompute(number) {
  console.log('Вычисляем число')
  let i = 0
  while (i < 999999999) i++
  while (i < 999999999) i++
  while (i < 999999999) i++
  while (i < 999999999) i++
  return number * 3
}

const UseMemoHook = () => {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // const styles = {
  //   backgroundColor: colored ? 'darkred' : '#f1f1f1'
  // }

  const styles = useMemo(() => ({
    backgroundColor: colored ? 'darkred' : '#f1f1f1'
  }), [colored])


  const computed = useMemo(() => {
    return lazyCompute(number);
  }, [number])

  useEffect(() => {
    console.log('useEffect! Зависимый от styles')
  }, [styles])

  return (
    <>
      <h1>с useMemo</h1>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className='button' onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className='button' onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className='button' onClick={() => setColored(prev => !prev)}>Изменить</button>
    </>
  )
};

export default UseMemoHook;