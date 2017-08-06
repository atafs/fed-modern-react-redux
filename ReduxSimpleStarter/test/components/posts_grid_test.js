import { renderComponent , expect } from '../test_helper';
import PostsGrid from '../../src/components/posts_grid';

describe('PostsGrid' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(PostsGrid);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
