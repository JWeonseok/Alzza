package com.mycom.app.service;

import com.mycom.app.domain.dto.user.UserDto;
import com.mycom.app.domain.entity.User;
import com.mycom.app.repository.StageRepository;
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

    @Autowired
    StageRepository stageRepository;

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

    @Override
    @Transactional
    public UserDto userDetail(String userId) {
        User user = userRepository.findByUserId(userId);
        UserDto userDto = null;
        if(user != null){
            userDto = new UserDto();
            userDto.setUserId(user.getUserId());
            userDto.setPassword(user.getPassword());
            userDto.setUserName(user.getUserName());
            userDto.setUserNickName(user.getUserNickName());
            userDto.setUserTel(user.getUserTel());
            userDto.setUserEmail(user.getUserEmail());
        }
        return userDto;
    }

    @Override
    @Transactional
    public int updateUserInfo(UserDto userDto) {
        try{
            User user = userRepository.findByUserId(userDto.getUserId());

            user.setUserNickName(userDto.getUserNickName());
            user.setUserTel(userDto.getUserTel());
            user.setUserEmail(userDto.getUserEmail());

            userRepository.save(user);
            return SUCCESS;
        }catch (Exception e){
            e.printStackTrace();
            return FAIL;
        }
    }

    @Override
    @Transactional
    public int updateUserPassword(UserDto userDto) {
        try{
            User user = userRepository.findByUserId(userDto.getUserId());
            user.setPassword(userDto.getPassword());
            userRepository.save(user);
            return SUCCESS;
        }catch (Exception e){
            e.printStackTrace();
            return FAIL;
        }
    }

    @Override
    @Transactional
    public int deleteUser(String userId) {
        try{
            stageRepository.deleteByUserId(userId);
            userRepository.deleteByUserId(userId);
            return SUCCESS;
        }catch (Exception e){
            e.printStackTrace();
            return FAIL;
        }
    }


}
