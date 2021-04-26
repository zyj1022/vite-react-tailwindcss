import React from 'react';
import Nav from './Nav.tsx';
import NavItem from './NavItem.tsx';
import List from './List.tsx';
import ListItem from './ListItem.tsx';

  const data = [
    {
      id: 1,
      recipe: {
        image: test,
        title: '担心复用性问题1',
        time: '2021-4-23',
        difficulty: 'Difficulty',
        servings: 'servings',
        author: 'author',
        rating: 'rating',
      },
    },
    {
      id: 2,
      recipe: {
        image: test,
        title: '担心复用性问题2',
        time: '2021-4-23',
        difficulty: 'Difficulty',
        servings: 'servings',
        author: 'author',
        rating: 'rating',
      },
    },
  ];

export default function Recipes({ recipes }) {
	return (
		<div className="divide-y divide-gray-100">
			<Nav>
				<NavItem href="/featured" isActive>
					Featured
				</NavItem>
				<NavItem href="/popular">Popular</NavItem>
				<NavItem href="/recent">Recent</NavItem>
			</Nav>
			<List>{recipes.map((recipe) => <ListItem key={recipe.id} recipe={recipe} />)}</List>
		</div>
	);
}
