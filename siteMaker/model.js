import image from './image.jpg'
import {TextBlock, ImageBlock, TitleBlock, ColumnsBlock} from './block'

const text = `крутые видео и уроки по JS тут:`


export const model = [
new TitleBlock('Конструктор сайтов на чистом JS', 
{
    tag: 'h2', 
    styles: {
        color: '#000',
        padding: '1.5rem'
    }
}),
new TextBlock(text, {
    styles: {
        padding: '1rem',
        color: '#000',
        'font-weight': 'bold'
    }
}),
new ColumnsBlock(['Приложение на чистом JS, без использования библиотек','Узнаешь как работает принципы SOLID и ООП в JS за один курс','JS - это просто, интересно. Научись создавать любые UI своими руками'], {
    styles: {
        padding: '2rem',
        color: '#000',
        'font-weight': 'bold'
    }
}),
new ImageBlock(image,{
    styles: {
        padding: '2rem 0',
        display: 'flex', 
        'justify-content': 'center'
    },
    imageStyles: {
        width: '500px',
        height: 'auto'
    },
    alt: 'Это картинка'
}),
]