package com.mycom.app.service;

import com.mycom.app.domain.dto.UserDto;
import com.mycom.app.domain.entity.User;
import com.mycom.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService{

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public boolean checkUserId(String userId) {
        if(userRepository.existsByUserId(userId)) return false;
        return true;
    }

    @Override
    @Transactional
    public int join(UserDto userDto) {

        try{
            User user = new User();

            user.setUserId(userDto.getUserId());
            user.setPassword(userDto.getPassword());
            user.setUserName(userDto.getUserName());
            user.setUserNickName(userDto.getUserNickName());
            user.setUserTel(userDto.getUserTel());
            user.setUserEmail(userDto.getUserEmail());
            // user.setProfileImg("s3 이미지 경로");

            userRepository.save(user);
            return SUCCESS;
        }catch (Exception e){
            e.printStackTrace();
            return FAIL;
        }

    }
}
