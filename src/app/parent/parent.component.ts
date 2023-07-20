import { Component } from '@angular/core'

export interface Address {
  country: string
  city: string
  street: string
  house: number
}

interface WeekGrades {
  id: number
  gradeItem: number
}

interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrades[]
}

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  fruits: Fruit[] = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'watermelon', price: 30 },
    { id: '4', name: 'banana', price: 5 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'raspberries', price: 18 },
    { id: '7', name: 'avocados', price: 14 },
    { id: '8', name: 'mangoes', price: 3 },
    { id: '9', name: 'kiwifruit', price: 7 },
  ]



  isSuccess = true

  value = ''

  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isSuccess = false
    }, 2000)
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }

  name = 'Ivan'
  surName = 'Ivanov'
  address: Address = {
    country: 'Belarus',
    city: 'Minsk',
    street: 'Lenina',
    house: 5,
  }
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 4,
        },
        {
          id: 1,
          gradeItem: 5,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'Phisycs',
      weekGrades: [
        {
          id: 0,
          gradeItem: 3,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
  ]
}
