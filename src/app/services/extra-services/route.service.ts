import { useLoadingAction } from '@stores/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export class RouteService {
  public static readonly gotoPage = (link: string) => {
    const history = useHistory();
    const dispatch = useDispatch();
    dispatch(useLoadingAction().showLoader());
    setTimeout(() => {
      history.push(link);
      dispatch(useLoadingAction().hideLoader());
    }, 500);
  }
}