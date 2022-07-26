import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetails } from '../redux/details/details';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.Details);
  const user = useSelector((state) => state.authReducer.user);

  const {
    name, flight_number, image, price
  } = item;

  useEffect(() => {
    dispatch(getItemDetails(id));
  }, []);

  const onClick = ((e) => {
    const user_id = user.id;
    const item_id = id;
    // You can uncomment these lines but firstly you need to create reserveItem and removeReservedItem functions

    /* 
       if (e.target.value === 'reserve') {
      
       dispatch(reserveItem({ user_id, item_id }));
       dispatch(getItemDetails(id));
      } else if (e.target.value === 'unreserve') {
       dispatch(removeReservedItem({ user_id, item_id }));
       dispatch(getItemDetails(id));
      }
     
     */
  });

  return (
    <>
    </>
  );
};

export default DetailsPage;