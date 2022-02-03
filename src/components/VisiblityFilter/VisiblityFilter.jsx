import style from './Visiblity.module.css'
import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../../constants';
import { setFilter } from '../../action';

  const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    
      <div>
        <div className={style.filter}>
          {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              
              <button className={style.btn}
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </button>
              
            )
          })}
        </div>
      </div>
    
  )
}
export default VisibilityFilter;